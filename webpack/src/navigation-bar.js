export const createNavigationBar = () => {
  const createNavigation = window.document.createElement('nav');
  createNavigation.innerHTML =
    `<ul>
      <li><a href="./index.html">home</a></li>
      <li><a href="./admin.html">admin</a></li>
      <li><a href="./visitor.html">visitor</a></li>
    </ul>`;
  return createNavigation;
}