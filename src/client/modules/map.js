function Linklist(val) {
    this.val = val;
    this.next = null;
}

function StSMap() {
    this.length = 16;
    this.levelsArr = [];
}

//chaque niveau ne peut avoir que 2-5 noeuds
StSMap.prototype.createNodesNum = function () {
    let id = 1;
    for (let i = 0; i < this.length - 1; i++) {
        let level = [];
        for (let j = 0; j < 5; j++) {
            level.push({
                type: this.assignNodeType(),
                next1: null, //chaque nœud peut se diviser en deux chemins
                next2: null,
                level: i + 1,
                beConnected: false,
                id: id++
            });
        }
        this.levelsArr.push(level);
    }
    for (let i = 0; i < this.levelsArr[0].length; i++) {
        this.levelsArr[0][i].beConnected = true;
    }
    this.levelsArr.push([{
        type: 5,
        level: this.length,
        beConnected: true,
        toConnect: true,
        id: 'boss',
    }]);
}

//attribuer un type au noeud
StSMap.prototype.assignNodeType = function () {
    return Math.random() < 0.4 ? 0 : (Math.random() < 0.5 ? 1 : (Math.random() < 0.5 ? 2 : (Math.random() < 0.5 ? 3 : 4)));
}

//construire des chemins
StSMap.prototype.buildPaths = function () {
    //ce flag enregistre quel noeud (index) dans le niveau suivant est le plus récemment connecté.
    for (let i = 0; i < this.length - 2; i++) {
        let nodeConnected = {
            index: 0,
            connectedNodesNum: 0,
            //si ce noeud est connecté à deux noeuds du dernier niveau, il ne peut plus être connecté à partir des noeuds restants du dernier niveau.
        };
        for (let j = 0; j < this.levelsArr[i].length; j++) {
            if (!this.levelsArr[i][j].beConnected && i != 0) {
                break;
            }
            //Tout d'abord, déterminer si ce nœud se connectera au nouveau nœud du niveau suivant.
            if ((Math.random() <= 0.1 || nodeConnected.connectedNodesNum == 2) && j != 0) {
                nodeConnected.index++;
                nodeConnected.connectedNodesNum = 0;
            } else {} //si ce n'est pas le cas, gardez cet indice

            //deuxièmement, déterminer si ce nœud va diviser son chemin
            if (Math.random() <= 0.45) {
                this.levelsArr[i][j].next1 = this.levelsArr[i + 1][nodeConnected.index];
                if (this.levelsArr[i + 1][nodeConnected.index]) {
                    this.levelsArr[i + 1][nodeConnected.index].beConnected = true;
                }
                nodeConnected.index++;
                if (nodeConnected.index > 4) {
                    break;
                }
                this.levelsArr[i][j].next2 = this.levelsArr[i + 1][nodeConnected.index];
                if (nodeConnected.index > 4) {
                    break;
                }
                this.levelsArr[i + 1][nodeConnected.index].beConnected = true;
                nodeConnected.connectedNodesNum = 1;
            } else {
                this.levelsArr[i][j].next1 = this.levelsArr[i + 1][nodeConnected.index];
                nodeConnected.connectedNodesNum++;
                if (nodeConnected.index > 4) {
                    break;
                }
                this.levelsArr[i + 1][nodeConnected.index].beConnected = true;
            }
            if (this.levelsArr[i][j].next1) {
                this.levelsArr[i][j].toConnect = true;
            }
        }
    }
    for (let i = 0; i < this.levelsArr[this.levelsArr.length - 2].length; i++) {
        //next1 de tous les nœuds de l'avant-dernier niveau fasse référence au dernier nœud.
        if (this.levelsArr[this.levelsArr.length - 2][i].beConnected) {
            this.levelsArr[this.levelsArr.length - 2][i].next1 = this.levelsArr[this.levelsArr.length - 1][0];
            this.levelsArr[this.levelsArr.length - 2][i].toConnect = true;
        }
    }
}

//supprimer les nœuds non connectés
StSMap.prototype.shakeTree = function () {
    for (let i = 0; i < this.levelsArr.length; i++) {
        for (let j = 0; j < this.levelsArr[i].length; j++) {
            if (!this.levelsArr[i][j].beConnected || !this.levelsArr[i][j].toConnect) {
                this.levelsArr[i].splice(j, 1);
                j--;
            }
        }
    }
}

StSMap.prototype.visualizeMap = function (dom) {
    a.createNodesNum();
    a.buildPaths();
    a.shakeTree();

    let stage = new JTopo.Stage(dom);
    let scene = new JTopo.Scene(stage);
    this.nodeArr = [];
    //visualiser les nœuds
    for (let i = 0; i < this.levelsArr.length; i++) {
        for (let j = 0; j < this.levelsArr[i].length; j++) {
            let node = new JTopo.Node(this.levelsArr[i][j].id);
            node.setLocation(j * 120 + 30 - 60 * Math.random(), i * 140 + 30 + 35 - 70 * Math.random());
            node.fontColor = 'black';
            node.setSize(30, 30);
            switch (this.levelsArr[i][j].type) {
                case 0:
                    node.setImage('./img/monster.png');
                    break;
                case 1:
                    node.setImage('img/elite.png');
                    break;
                case 2:
                    node.setImage('img/unknown.png');
                    break;
                case 3:
                    node.setImage('img/shop.png');
                    break;
                case 4:
                    node.setImage('img/chest.png');
                    break;
                case 5:
                    node.setImage('img/boss.png');
                    node.setSize(200, 200);
                    break;
            }
            //définir les propriétés personnalisées
            node.serializedProperties.push('next1');
            if (this.levelsArr[i][j].next1) {
                node.next1 = this.levelsArr[i][j].next1.id;
            }
            node.serializedProperties.push('next2');
            if (this.levelsArr[i][j].next2) {
                node.next2 = this.levelsArr[i][j].next2.id;
            }


            scene.add(node);
            this.nodeArr.push(node);
        }
    };
    console.log(this.nodeArr);
    //visualiser les chemins
    for (let i = 0; i < this.nodeArr.length; i++) {
        for (let j = i; j < this.nodeArr.length; j++) {
            if (this.nodeArr[i].next1 == this.nodeArr[j].text || this.nodeArr[i].next2 == this.nodeArr[j].text) {
                createPath(this.nodeArr[i], this.nodeArr[j], scene);
            }
        }
    };

    function createPath(nodeA, nodeZ, scene) {
        let path = new JTopo.Link(nodeA, nodeZ);
        path.dashedPattern = 5;
        scene.add(path);
    }
}