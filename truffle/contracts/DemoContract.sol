pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract DemoContract {

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct DemoData {
        string name;
        uint id;
    }

    DemoData[] public demodata;

    function _createDemoData(string memory _name, uint _id) private {
        uint id = demodata.push(DemoData(_name, _id)) - 1;
    }

    function _generateRandomId(string memory _str) private view returns (uint) {
        uint rand = uint(keccak256(abi.encode(_str)));
        return rand % dnaModulus;
    }

    function createRandomData(string memory _name) public {
        uint randId = _generateRandomId(_name);
        _createDemoData(_name, randId);
    }

    function getData() public view returns (DemoData[] memory){
        return demodata;
    }
}


