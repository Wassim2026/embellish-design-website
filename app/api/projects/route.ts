import {NextResponse} from "next/server";import {db} from "@/lib/mongodb";
export async function GET(){const projects=await (await db()).collection("projects").find({published:true}).sort({order:1}).toArray();return NextResponse.json(projects)}
