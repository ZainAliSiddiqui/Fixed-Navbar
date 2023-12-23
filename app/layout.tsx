import { Navbar } from "@components";
import "@styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});
export const metadata: Metadata = {
	title: "Scroll Up Navbar",
	description: "Scroll Up Navbar",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
