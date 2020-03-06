import React from "react";


function Table() {
    return (
      <div className="container">
       <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>David</td>
      <td>Otto</td>
      <td>34</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>27</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>Peace</td>
      <td>19</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Kyle</td>
      <td>Skipper</td>
      <td>42</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Teddy</td>
      <td>Ray</td>
      <td>48</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Lebron</td>
      <td>James</td>
      <td>35</td>
    </tr>
  </tbody>
</table>
      </div>
    );
  }
  
  export default Table;