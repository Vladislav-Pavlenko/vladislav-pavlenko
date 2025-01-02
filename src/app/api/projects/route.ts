import { NextResponse } from "next/server";
import { initMongoConnect } from "../db/initMongoConnection";
import { ProjectsCollection } from "../models/projects";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const searchParams = Object.fromEntries(url.searchParams.entries());
    const arrFilters = Object.keys(searchParams);
    const filters =
      arrFilters.length > 0 ? { technology: { $all: arrFilters } } : {};
    await initMongoConnect();

    const data = await ProjectsCollection.find(filters).lean();

    if (data.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: `No data found`,
          filters: searchParams,
        },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data, filters: searchParams });
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
