pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;


contract ZombieFactory {

    // イベントをここで宣言するのだ
    event NewZombie(uint zombieId, string name, uint dna);

    uint dnaDigits = 14;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    Zombie[] public zombies;

    mapping (uint => address) public zombieToOwner;
    mapping (address => uint) ownerZombieCount;

    function _createZombie(string memory _name, uint _dna) private {
        // zombies.push(Zombie(_name, _dna));
        // ここでイベントを発生させるのだ
        uint id = zombies.push(Zombie(_name, _dna)) - 1;
        zombieToOwner[id] = msg.sender;
        ownerZombieCount[msg.sender]++;

        // emit NewZombie(id, _name, _dna);
    }

    function _generateRandomDna(string memory _str) private view returns (uint) {
        uint rand = uint(keccak256(abi.encode(_str)));
        return rand % dnaModulus;
    }

    function createRandomZombie(string memory _name) public {
        uint randDna = _generateRandomDna(_name);
        _createZombie(_name, randDna);
    }

    function getZombies() public view returns (Zombie memory){
        return zombies[0];
    }
}


