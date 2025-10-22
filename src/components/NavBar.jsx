//will have apps title , a username greating and a cart icon
// will show if cat if full  with a red dot 
import cartEmpty from "../assets/cart-empty.png";
import cartFull from "../assets/cart-full.png"


export default function NavBar({cart})
{
    const hasItems = cart.find(item => item.quantity>0);
    const cartIcon = hasItems ? cartFull : cartEmpty;

    return (
        <div className="NavBar">
            <div className="NavUser">
            <h2>Welcome, User!</h2>
            </div>
            <div className="NavTitle">
            <h1>Grocery App</h1>  
            </div>      
            <div className="NavCart">
            <img src={cartIcon}/>
            </div>
        </div>
    );
}

