// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract Mos is ERC721Enumerable, Ownable{

    constructor()ERC721("Mos", "MN"){
        _safeMint(msg.sender, 1);
    }
}