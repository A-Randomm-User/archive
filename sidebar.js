function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("collapsed"); 
}

const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.onclick = () => {
    sidebar.classList.toggle("collapsed");
};
