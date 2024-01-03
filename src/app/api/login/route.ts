import { NextRequest, NextResponse } from "next/server";
import { getUser } from "../../../../lib/data";

export const POST = async (req: Request, res: Response) => {
  const { email, password } = await req.json();
  try {
    const users = getUser();
    const user = users.find(u => u.email === email);

    if (!user || user.password !== password) {
      // If user is not found or password doesn't match
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // If login is successful
    return NextResponse.json({ message: "Login successful", user }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
