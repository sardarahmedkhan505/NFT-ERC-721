// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;
 

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract ahmedNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private tokenIds;

    constructor() ERC721("Ahmed khan", "AxB"){

    }
    function mintAhmedNFT(address recipeint, string memory imageTokenURI) public onlyOwner returns(uint256){
        tokenIds.increment();
        uint256 newTokenId = tokenIds.current();
        _mint(recipeint, newTokenId);   
        _setTokenURI(newTokenId, imageTokenURI);
        return newTokenId;
    }
}