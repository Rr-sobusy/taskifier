import { NextRequest, NextResponse } from "next/server";


export function GET(req: NextRequest, res: NextResponse) {

        const sampleResponse = [
                {
                        id: 1,
                        progress: 100,
                        status: 'Not starting',
                        target_date: '22 Mar 2024',
                        task_name: "Go to bath",
                        task_type: "incidental"
                },
                {
                        id: 1,
                        progress: 80,
                        status: 'In progress',
                        target_date: '22 Mar 2024',
                        task_name: "Go to bath",
                        task_type: "incidental"
                },
                {
                        id: 1,
                        progress: 80,
                        status: 'Failed',
                        target_date: '22 Mar 2024',
                        task_name: "Go to bath",
                        task_type: "incidental"
                },
                {
                        id: 1,
                        progress: 100,
                        status: 'Completed',
                        target_date: '22 Mar 2024',
                        task_name: "Go to bath",
                        task_type: "incidental"
                }
        ]

        return Response.json(sampleResponse);
}