import { get } from "http";
import { NextRequest, NextResponse } from "next/server";
import { addUser, getUser } from "../../../../lib/data";

export const GET = async (req: Request, res: Response) => {
  try { 
    const users = getUser();
    return NextResponse.json({message:"OK", users}, {status:200});
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, {
      status: 500,
    });
  }
};

export const POST = async (req: Request, res: Response) => {
  const {name, email, password } = await req.json();
  try {
     const user = {name, email, password, date: new Date(), id:Date.now().toString()};
     addUser(user);
     return NextResponse.json({message:"OK", user}, {status:201});
  } catch (err: any) {
    if (err.message === 'User already exists') {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }
    
    return NextResponse.json({ message: "Error", err }, {
      status: 500,
    });
  }
};
