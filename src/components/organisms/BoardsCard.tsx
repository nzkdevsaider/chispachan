import { Suspense } from "react";
import BoardsList from "../molecules/BoardsList";

const BoardsCard = () => {
	return (
		<div className="card bg-base-100 card-sm shadow-sm">
			<div className="card-body">
				<h2 className="card-title">TABLONES</h2>
				<p>los tablones de chispachan se caracterizan por no ser ejemplares</p>
				<div className="divider" />

				{/* secciones */}
				<div className="grid grid-cols-1 gap-4">
					<Suspense
						fallback={
							<div className="flex flex-col gap-2">
								<div className="skeleton h-4 w-full" />
								<div className="skeleton h-4 w-full" />
								<div className="skeleton h-4 w-full" />
								<div className="skeleton h-4 w-full" />
							</div>
						}
					>
						<BoardsList />
					</Suspense>
				</div>
			</div>
		</div>
	);
};

export default BoardsCard;
