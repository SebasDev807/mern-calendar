interface ErrorMessageProps {
    children: React.ReactNode
}

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
    return (
        <p className="bg-red-200 text-center mt-2 border-2 border-red-300 text-red-400">
            {children}
        </p>
    )
}
