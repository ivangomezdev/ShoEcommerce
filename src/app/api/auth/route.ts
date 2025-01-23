
import { createOrFindUser } from '@/controllers/authController';
import { Auth } from '@/models/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {

    Auth.sync({alter:true})
    const body = await request.json();
    const email = body.email;
    createOrFindUser(email)
    
  } catch (error) {
    console.error(error);
    
  }

  
  return NextResponse.json({ message: 'Auth OK' });
}

