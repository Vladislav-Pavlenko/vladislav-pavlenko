import { NextResponse } from "next/server";
import { initMongoConnect } from "../../db/initMongoConnection";
import { SnippetsCollection } from "../../models/snippets.js";

export async function PATCH(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Id is required",
        },
        { status: 400 }
      );
    }

    const { stars } = await request.json();

    if (stars === undefined) {
      return NextResponse.json(
        {
          success: false,
          message: "Stars value is required",
        },
        { status: 400 }
      );
    }

    await initMongoConnect();

    const data = await SnippetsCollection.findOneAndUpdate(
      { id: id },
      { $set: { stars } },
      { new: true }
    ).lean();

    if (!data) {
      return NextResponse.json(
        {
          success: false,
          message: `No data found`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error updating data:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
