import Card from "../components/Elements/Card/index";
import MainLayout from "../components/Layout/MainLayout";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Total Balance" />
        <Card 
          title="Goals" 
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nesciunt quaerat! Adipisci deleniti modi autem quasi eaque id, sequi sunt eligendi, recusandae deserunt, neque maxime qui et quidem labore minus!"
          />
        <Card title="Upcoming Bill" /> 
        </div>
        {/*top content end */}
        {/* buttom content start */}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <div className="md:col-span-1">
          <Card
           title="Recent Transaction"
           desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nesciunt quaerat! Adipisci deleniti modi autem quasi eaque id, sequi sunt eligendi, recusandae deserunt," 
           />
        </div>
        <div className="md:col-span-2 flex flex-col flex-1">
          <Card title="Statistics" />
          <Card title="Expenses Breakdown" />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;