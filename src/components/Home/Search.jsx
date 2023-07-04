import React from "react";

const Search = () => {
  return (
    <div>
      <form action="#">
        <div className="inpt_bx">
          <div className="inpt_bx_inr">
            <input
              type="text"
              placeholder="Search for products, brand and more"
              required
            />
          </div>

          <div className="inpt_bx_inr">
            <input type="submit" value="Image Search" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
