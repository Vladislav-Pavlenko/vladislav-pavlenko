import { NextResponse } from "next/server";
import { initMongoConnect } from "../db/initMongoConnection";
import { AboutMeCollection } from "../models/about-me";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const fileName = url.searchParams.get("file");

    if (!fileName) {
      return NextResponse.json({
        success: false,
        message: "File name is required",
      });
    }

    await initMongoConnect();

    const data = await AboutMeCollection.findOne({ file: fileName }).lean();

    if (!data) {
      return NextResponse.json({
        success: false,
        message: `No data found for file: ${fileName}`,
      });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to fetch data",
    });
  }
}
