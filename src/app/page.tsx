import Banner from "@/components/molecules/Banner";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			{/* banner*/}
			<Banner />

			{/* tarjetas */}
			<div className="grid grid-cols-3 gap-4 p-5 items-start">
				{/* stats */}
				<div className="card bg-base-100 card-sm shadow-sm">
					<div className="card-body">
						<h2 className="card-title">ESTADÍSTICAS</h2>
						<p>mira las estadísticas woooohoooo</p>
						<div className="divider" />

						{/* secciones */}
						<div className="grid grid-cols-1 gap-4">
							<div>
								<h2 className="text-xl font-bold">EN LÍNEA</h2>
								<p>10 usuarios en línea</p>
							</div>

							<div>
								<h2 className="text-xl font-bold">USUARIOS</h2>
								<p>200 usuarios hoy</p>
							</div>

							<div>
								<h2 className="text-xl font-bold">POSTS</h2>
								<p>1000 posts en total</p>
							</div>
						</div>
					</div>
				</div>

				{/* tablones */}
				<div className="card bg-base-100 card-sm shadow-sm">
					<div className="card-body">
						<h2 className="card-title">TABLONES</h2>
						<p>
							chispachan es un ib donde puedes compartir tus ideas y no tan
							ideas
						</p>
						<div className="divider" />

						{/* secciones */}
						<div className="grid grid-cols-3 gap-4">
							<div>
								<h2 className="text-xl font-bold">SECCIÓN 1</h2>
								<ul>
									<li>
										<Link href="/board/url">Tablón Link</Link>
									</li>
									<li>
										<Link href="/board/url">Tablón Link</Link>
									</li>
								</ul>
							</div>

							<div>
								<h2 className="text-xl font-bold">SECCIÓN 2</h2>
								<ul>
									<li>
										<Link href="/board/url">Tablón Link</Link>
									</li>
									<li>
										<Link href="/board/url">Tablón Link</Link>
									</li>
								</ul>
							</div>

							<div>
								<h2 className="text-xl font-bold">SECCIÓN 3</h2>
								<ul>
									<li>
										<Link href="/board/url">Tablón Link</Link>
									</li>
									<li>
										<Link href="/board/url">Tablón Link</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

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
