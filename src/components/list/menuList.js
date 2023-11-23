import dataMenus from "./DataMenu";
import "./MenuList.css";


function MenuContact() {
    const listMenu = dataMenus.map((dataMenu) => {
        return(
          <div className="containers" key={dataMenu.value} >
          <div className="imgs ">
            <img className="imgItem" src={dataMenu.img} alt=" " />
          </div>
          <div className="contents">
            <h3 className="contentTitles">{dataMenu.name}</h3>
            <p className="contentContacts">{dataMenu.price} đ</p>
          </div>
        </div>
        );
    });
    return <>{listMenu}</>;
        
}

export default MenuContact;