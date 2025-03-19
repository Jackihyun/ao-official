import React from 'react'
import { useState } from "react"
import { ScrollRestoration, useNavigate } from "react-router-dom";

const index = () => {
    const navigate = useNavigate();

    const [name, setName] = useState<string>('');
    const [pw, setPw] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate('/admin/application-history', { state: { name, pw } })
    }

    return (
        <>
            <ScrollRestoration />

            <h1 className="text-2xl font-bold  dark:text-white mb-7">관리자 전용</h1>
            <form
                className="flex flex-col gap-3 w-full max-w-[250px]"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="이름을 입려해주세요."
                    className="rounded-md py-1 px-2 focus:outline-none bg-black/50 dark:bg-white/80 focus:ring-2 focus:ring-[rgb(13,192,222)]"
                    onInput={(e) => setName(e.currentTarget.value)}
                />
                <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    className="rounded-md py-1 px-2 focus:outline-none bg-black/50 dark:bg-white/80 focus:ring-2 focus:ring-[rgb(13,192,222)]"
                    onInput={(e) => setPw(e.currentTarget.value)}
                />
                <button
                    type="submit"
                    className="rounded-md p-1 bg-[rgb(13,192,222)] text-white"
                >
                    로그인
                </button>
            </form>
        </>
    )
}

export default index