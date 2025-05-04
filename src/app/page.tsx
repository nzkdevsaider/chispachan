import Banner from "@/components/molecules/Banner";
import BoardsCard from "@/components/organisms/BoardsCard";
import UserStats from "@/components/organisms/UserStats";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			{/* banner*/}
			<Banner />

			{/* tarjetas */}
			<div className="grid grid-cols-3 gap-4 p-5 items-start">
				{/* stats */}
				<UserStats />

				{/* tablones */}
				<BoardsCard />

				{/* actividad reciente */}
				<div className="card bg-base-100 card-sm shadow-sm">
					<div className="card-body">
						<h2 className="card-title">ACTIVIDAD RECIENTE</h2>
						<p>que ha sido lo ultimo que ha pasado en el tablón? mira aquí</p>
						<div className="divider" />

						{/* secciones */}
						<div className="grid grid-cols-3 gap-4">
							<div>
								<ul>
									<li>
										<Link href="/board/url">Post Link</Link>
									</li>
									<li>
										<Link href="/board/url">Post Link</Link>
									</li>
									<li>
										<Link href="/board/url">Post Link</Link>
									</li>
									<li>
										<Link href="/board/url">Post Link</Link>
									</li>
									<li>
										<Link href="/board/url">Post Link</Link>
									</li>
									<li>
										<Link href="/board/url">Post Link</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
