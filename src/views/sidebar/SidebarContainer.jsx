import "./sidebarContainer.css";

export function SidebarContainer({ children }) {
	return (
		<div className="sidebar-container paper-grid-container">
			<div className="inner w-full h-full relative paper-grid">{children}</div>
		</div>
	);
}
