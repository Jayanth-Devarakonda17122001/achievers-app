import React from "react";
import "../nav.css";
import logo from "./img/logo/logo.png";
import { Badge, MenuItem, MenuList, Button} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function Heading() {
    return(
        <>
        <navs>
            <div id="nav_icon">
                <img src={logo} alt="hello"/>
            </div>

            <div>
                <ul id="nav_ele">
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./index.html">Category</a></li>
                    <li><a href="./index.html">Latest</a></li>
                    <li><a href="./index.html">Blog</a></li>
                    <li><a href="./index.html">Pages</a></li>
                    <li><a href="./index.html">Contact</a></li>
                </ul>
            </div>

            <div id="search">
                <input type="text" placeholder="Search Products"></input>
            </div>

            <div>
                <MenuList id="MenuList">
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <FavoriteIcon />
                        </Badge>
                    </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                    </MenuItem>
                    <MenuItem>
                        <Button variant="contained" sx={{borderRadius: 28, textTransform: "capitalize"}}>Sign in</Button>
                    </MenuItem>
                </MenuList>
            </div>
        </navs>
    </>
    );
}

export default Heading;