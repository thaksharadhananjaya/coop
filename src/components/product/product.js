import User from "./components/user/user";
import Cart from "./components/cart/cart";
import axios from "axios";
 
import "./CSS/style.css";
import pin from "../../assets/pin.png";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectCategory: 0,
      categery: null,
    };
  }
  componentDidMount() {
    this.getCategory();
  }

  render() {
    return (
      <>
        <this.ProductDashBoad />
      </>
    );
  }

  // Product Card Design
  ProductCard = () => {
    const cardStyle = {
      width: "190px",
      height: "220px",
      backgroundImage:
        "url('https://backend.lassana.com/images//products/KOTAGALA%2050g--1587729175.jpg')",
      backgroundSize: "100% 100%",
      padding: "0",
      cursor: "pointer",
      borderRadius: 12,
    }

    const labelStyle = {
      height: "45px",
      width: "190px",
      background: "rgb(66, 245, 84, 0.6)",
      color: "black",
      marginTop: "173px",
      lineHeight: "25%",
      alignItems: "center",
      paddingTop: "10px",

      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
    }

    return (
      <div
        className="container border"
        style={cardStyle}
        onClick={() => {
          
        }}
      >
        <div style={labelStyle}>
          <p style={{ fontWeight: "bold" }}>Product Name</p>
          <p>LKR 1000.00</p>
        </div>
      </div>
    );
  }

  // Product grid view
  ProductGrid = () => {
    const gridStyle =
       {
            marginTop: 100,
            marginBottom: 16,
            display: "grid",
            width: "100%",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gridGap: "12px",
          }
        
    var productCard = [];
    for (var i = 0; i < 100; i++) {
      productCard.push(<this.ProductCard />);
    }
    return <div style={gridStyle}>{productCard}</div>;
  };

  Category = () => {
    var category = <p>Loading</p>;

    if (this.state.categery !== null) {
      category = this.state.categery.map((item, key) =>
        this.state.selectCategory !== item["category_id"] ? (
          <button
            type="button"
            key={key}
            className="btn btn-outline-secondary"
            onClick={() => {
              this.setState({ selectCategory: item["category_id"] });
            }}
          >
            {item["category_name"]}
          </button>
        ) : (
          <button type="button" className="btn btn-primary" key={key}>
            {item["category_name"]}
          </button>
        )
      );
    }
    return <div className="scroll">{category}</div>;
  }

  // Full product dashbord
  ProductDashBoad = () => {
    return (
      <div>
        <div
          className="row border-bottom"
          style={{
            position: "sticky",
            width: "100%",
            paddingBottom: 24,
            paddingTop: 8,
            margin: 0,
            top: 0,
            backgroundColor: "white",
          }}
        >
          <div className="col-6">
            <input type="text" placeholder="Search..." id="styleSearch" />
          </div>
          <div
            className="col-4"
            style={{
              paddingTop: 5,
              fontWeight: "bold",
              textAlign: "left",
              fontSize: "17px",
            }}
          >
            <img src={pin} alt="pin" style={{ paddingRight: "6px" }} />
            Colombo
          </div>
          <div className="col-1">
            <Cart />
          </div>
          <div className="col-1">
            <User />
          </div>
        </div>
        <this.Category />

        <this.ProductGrid />
      </div>
    );
  }


  getCategory() {
    axios
      .post("https://dailyoops.com/coop/getCategory.php", {
        key: "z$#PYc3E/:33VTiVB]T3p!c3E/Kcx!",
      })
      .then((response) => {
        this.setState({ categery: response.data });
      });
  }
}
export default Product;
