import LogoImg from "../../assets/common/logo.png";
import { BodyOne, Caption, CustomeLink, Title } from "./CustomComponents";

const Footer = () => {
  return (
    <>
      <footer className="py-14">
        <div className="container grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src={LogoImg} alt="LogoImg" className="h-7" />
            <div className="flex flex-col gap-2 mt-5">
              <Caption>Address: 45 Me Hien, Da Nang, Viet Nam</Caption>
              <Caption>Email: quando952@gmail.com</Caption>
              <Caption>Call: 0904994142</Caption>
              <Caption></Caption>
            </div>
            <br />
            <BodyOne>Subsricbe to our Newsletter</BodyOne>
            <input
              type="text"
              className="p-3 w-full border bg-white-100 border-gray-300 rounded-md outline-none"
              placeholder="Enter your newsletter"
            />
          </div>
          <div>
            <Title level={5}>Our Stores </Title>
            <div className="flex flex-col gap-4">
              <CustomeLink>Normal</CustomeLink>
              <CustomeLink>Shop with Category</CustomeLink>
              <CustomeLink>Shop with Sidebar</CustomeLink>
              <CustomeLink>Shop Filters top Bar</CustomeLink>
              <CustomeLink>Shop Wide</CustomeLink>
              <CustomeLink>my Account</CustomeLink>
            </div>
          </div>
          <div>
            <Title level={5}>Usefull Link</Title>
            <div className="flex flex-col gap-4">
              <CustomeLink>Normal</CustomeLink>
              <CustomeLink>Shop with Category</CustomeLink>
              <CustomeLink>Shop with Sidebar</CustomeLink>
              <CustomeLink>Shop Filters top Bar</CustomeLink>
              <CustomeLink>Shop Wide</CustomeLink>
              <CustomeLink>my Account</CustomeLink>
            </div>
          </div>
          <div>
            <Title level={5}>Our Blog</Title>
            <div className="flex flex-col gap-4">
              <CustomeLink>Normal</CustomeLink>
              <CustomeLink>Shop with Category</CustomeLink>
              <CustomeLink>Shop with Sidebar</CustomeLink>
              <CustomeLink>Shop Filters top Bar</CustomeLink>
              <CustomeLink>Shop Wide</CustomeLink>
              <CustomeLink>my Account</CustomeLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
