"use client";
import type { ReactNode } from "react";

const StatCard = ({
	title,
	value,
	description,
	icon,
}: {
	title: string;
	value: string | number;
	description?: string;
	icon?: ReactNode;
}) => {
	return (
		<div className="stats shadow">
			<div className="stat">
				<div className="stat-title">{title}</div>
				<div className="stat-value">{value}</div>
				{icon && <div className="stat-figure text-secondary">{icon}</div>}
				{description && <div className="stat-desc">{description}</div>}
			</div>
		</div>
	);
};

export default StatCard;
