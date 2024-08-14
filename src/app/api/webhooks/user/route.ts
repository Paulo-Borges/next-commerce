import prisma from '@/lib/prisma'
import { IncomingHttpHeaders } from 'http'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { Webhook, WebhookRequiredHeaders } from 'svix'

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || ''

type EventType = 'user.created' | 'user.updated' | '*'

type Event = {
    data: EventDataType
    object: 'event'
    type: EventType
}

type EventDataType = {
    id: string
    first_name: string
    last_name: string
    email_addresses: EmailAddressType[]
    primary_email_address_id: string
    attributes: Record<string, string | number>
}

type EmailAddressType = {
    id: string
    email_address: string
}


async function handler(request: Request) {
    const payload = await request.json()
    const headerList = headers()
    const heads = {
        'svix-id': headerList.get('svix-id'),
        'svix-timestamp': headerList.get('svix-timestamp'),
        'svix-signature': headerList.get('svix-signature') 
    }
    const wh = new Webhook(webhookSecret)
    const evt: Event | null = null
    
}

export const GET = handler
export const POST = handler
export const PUT = handler