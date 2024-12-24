import { NextResponse } from "next/server";
import { initMongoConnect } from "../../db/initMongoConnection";
import { SnippetsCollection } from "../../models/snippets.js";

export async function GET() {
  try {
    await initMongoConnect();

    const data = await SnippetsCollection.find().lean();

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
    console.error("Error fetching data:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch data",
      },
      { status: 500 }
    );
  }
}
