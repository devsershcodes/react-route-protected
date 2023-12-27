/* eslint-disable react/prop-types */

export const Landing = () => <h2>Landing Page (Public)</h2>

export const Home = () => {
/*   if (!user) {
    return <Navigate to= "/landing"/>
  } */
  return <h2> Home Page (Private)</h2>

}
export const Dashboard = () => <h2> Dashboard Page (Private)</h2>

export const Analytics1 = () => <h2> Analytics1 (Private, permission: `analytics1`)</h2>

export const Admin = () => <h2> Admin (Private, permission: `admin`)</h2>