"use client"

import { Provider } from 'react-redux';
import { store } from '../../states';
import TotalNilaiStore from '@/components/TotalNilaiStore';
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Provider store={store}>
            <TotalNilaiStore></TotalNilaiStore>
            <div>
                <div className="max-w-6xl mx-auto -p-3">
                    {children}
                </div>
            </div>
        </Provider>
    )
}