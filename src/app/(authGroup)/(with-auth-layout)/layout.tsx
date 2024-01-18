"use client"
import { useState } from "react";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [input, setInput] = useState("");

    return (
        <div>
            <div>
                <p>layout :</p>
                <input value={input} onChange={ e => setInput(e.target.value) }/>
            </div>
            <h2>Inner Layout</h2>
            
            {children}
        </div>
    )
}