"use client";
import StatCard from "../molecules/StatCard";

const UserStats = () => {
	return (
		<div className="grid cols-3 gap-4">
			<StatCard title="USUARIOS EN LÍNEA" value={20} />
			<StatCard title="HILOS EN LA ÚLTIMA HORA" value={20} />
			<StatCard title="RESPUESTAS EN LA ÚLTIMA HORA" value={20} />
		</div>
	);
};

export default UserStats;
