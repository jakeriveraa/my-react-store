import ProductsForm from "./ProductsForm";
import CouponForm from "./CouponForm";

import "./admin.css";

function Admin() {
    return (
        <div>
            <div className="admin">
                <h1>store management</h1>
            </div>
            
            <div className="parent">
                <ProductsForm />
                <CouponForm />
            </div>
        </div>
    );
}

export default Admin;
