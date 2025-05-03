import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "chispajuan",
	description: "el ib más rapido de la historia",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es" data-theme="retro">
			<body className="w-[80%] mx-auto mt-10">{children}</body>
		</html>
	);
}
