class Block {
    constructor(code, position, dimension, color) {
        this.code = code;
        this.position = position;
        this.dimension = dimension;
        this.color = color;
    }

    draw() {
        ctx.fillStyle = this.color.state;
        ctx.fillRect(
            this.position.x,
            this.position.y,
            this.dimension.w,
            this.dimension.h
        );
    }
}

class Desk {
    constructor(night) {
        this.lights = { e: false, d: false };
        this.doors = { e: false, d: false };
        this.errorComand = { e: false, d: false };
        this.camera = false;
        this.battery = 100;
        this.usage = 1;
        this.time = 0;
        this.night = night;
        this.state = 0;
        this.lastComand = "";
        this.animaJumpscare = 0;
    }
}

class Animatronic {
    constructor() {
        this.state = { bo: 0, ch: 0, fo: 0, fr: 0 };
        this.color = {
            bo: "#094b8d",
            ch: "#adad48",
            fo: "#920808",
            fr: "#80411c",
        };
        this.difficulty = {
            bo: { alpha: 0, fuga: 0, mortalidade: 0 },
            ch: { alpha: 0, fuga: 0, mortalidade: 0 },
            fo: { alpha: 0, runmode: false, mortalidade: 0 },
            fr: { alpha: 0, mortalidade: 0, a: 0, b: 0 },
        };
        this.activeAnima = {
            bo: { night: false, hora: 0 },
            ch: { night: false, hora: 0 },
            fo: { night: false, hora: 0 },
            fr: { night: false, hora: 0 },
        };
    }

    activedifficulty() {
        let x = 2;
        switch (desk.night) {
            case 1:
                this.difficulty = {
                    bo: { alpha: x * 5, fuga: x * 10, mortalidade: x * 5 },
                    ch: { alpha: x * 5, fuga: x * 10, mortalidade: x * 5 },
                    fo: { alpha: 0, runmode: false, mortalidade: 0 },
                    fr: { alpha: 0, mortalidade: 0, a: 0, b: 0 },
                };
                this.activeAnima = {
                    bo: { night: true, hora: 2 },
                    ch: { night: true, hora: 2 },
                    fo: { night: false, hora: 0 },
                    fr: { night: false, hora: 0 },
                };
                break;
            case 2:
                this.difficulty = {
                    bo: { alpha: x * 7.5, fuga: x * 9, mortalidade: x * 10 },
                    ch: { alpha: x * 7.5, fuga: x * 9, mortalidade: x * 10 },
                    fo: { alpha: x * 3, runmode: false, mortalidade: x * 5 },
                    fr: { alpha: 0, mortalidade: 0, a: 0, b: 0 },
                };
                this.activeAnima = {
                    bo: { night: true, hora: 1 },
                    ch: { night: true, hora: 1 },
                    fo: { night: true, hora: 2 },
                    fr: { night: false, hora: 0 },
                };
                break;
            case 3:
                this.difficulty = {
                    bo: { alpha: x * 10, fuga: x * 8, mortalidade: x * 15 },
                    ch: { alpha: x * 10, fuga: x * 8, mortalidade: x * 15 },
                    fo: {
                        alpha: x * 3.5,
                        runmode: false,
                        mortalidade: x * 7.5,
                    },
                    fr: { alpha: 0, mortalidade: 0, a: 0, b: 0 },
                };
                this.activeAnima = {
                    bo: { night: true, hora: 0 },
                    ch: { night: true, hora: 0 },
                    fo: { night: true, hora: 2 },
                    fr: { night: false, hora: 0 },
                };
                break;
            case 4:
                this.difficulty = {
                    bo: { alpha: x * 12.5, fuga: x * 7, mortalidade: x * 20 },
                    ch: { alpha: x * 12.5, fuga: x * 7, mortalidade: x * 20 },
                    fo: { alpha: x * 4, runmode: false, mortalidade: x * 10 },
                    fr: { alpha: x * 5, mortalidade: x * 10, a: 0, b: 0 },
                };
                this.activeAnima = {
                    bo: { night: true, hora: 0 },
                    ch: { night: true, hora: 0 },
                    fo: { night: true, hora: 1 },
                    fr: { night: true, hora: 4 },
                };
                break;
            case 5:
                this.difficulty = {
                    bo: { alpha: x * 15, fuga: x * 6, mortalidade: x * 25 },
                    ch: { alpha: x * 15, fuga: x * 6, mortalidade: x * 25 },
                    fo: {
                        alpha: x * 4.5,
                        runmode: false,
                        mortalidade: x * 12.5,
                    },
                    fr: { alpha: x * 6, mortalidade: x * 12.5, a: 0, b: 0 },
                };
                this.activeAnima = {
                    bo: { night: true, hora: 0 },
                    ch: { night: true, hora: 0 },
                    fo: { night: true, hora: 1 },
                    fr: { night: true, hora: 3 },
                };
                break;
            case 6:
                this.difficulty = {
                    bo: { alpha: x * 17.5, fuga: x * 5, mortalidade: x * 30 },
                    ch: { alpha: x * 17.5, fuga: x * 5, mortalidade: x * 30 },
                    fo: { alpha: x * 5, runmode: false, mortalidade: x * 15 },
                    fr: { alpha: x * 7, mortalidade: x * 15, a: 0, b: 0 },
                };
                this.activeAnima = {
                    bo: { night: true, hora: 0 },
                    ch: { night: true, hora: 0 },
                    fo: { night: true, hora: 0 },
                    fr: { night: true, hora: 2 },
                };
                break;
        }
    }

    draw() {
        if (this.state.bo == 2) {
            if (desk.camera) {
                ctx.fillStyle = this.color.bo;
                ctx.fillRect(
                    espaceLetter * 30,
                    espaceLetter * 8,
                    espaceLetter * 8,
                    espaceLetter * 15
                );
                ctx.fillRect(
                    espaceLetter * 32.5,
                    espaceLetter * 5,
                    espaceLetter * 3,
                    espaceLetter * 3
                );
                ctx.fillRect(
                    espaceLetter * 28,
                    espaceLetter * 8,
                    espaceLetter * 2,
                    espaceLetter * 8
                );
                ctx.fillRect(
                    espaceLetter * 38,
                    espaceLetter * 8,
                    espaceLetter * 2,
                    espaceLetter * 8
                );
            }
        }
        if (this.state.fo == 2) {
            if (desk.camera) {
                ctx.fillStyle = this.color.fo;
                ctx.fillRect(
                    espaceLetter * 30,
                    espaceLetter * 8,
                    espaceLetter * 8,
                    espaceLetter * 15
                );
                ctx.fillRect(
                    espaceLetter * 32.5,
                    espaceLetter * 5,
                    espaceLetter * 3,
                    espaceLetter * 3
                );
                ctx.fillRect(
                    espaceLetter * 28,
                    espaceLetter * 8,
                    espaceLetter * 2,
                    espaceLetter * 8
                );
                ctx.fillRect(
                    espaceLetter * 38,
                    espaceLetter * 8,
                    espaceLetter * 2,
                    espaceLetter * 8
                );
                ctx.font = "20px monospace";
                ctx.fillStyle = "#fff";
                ctx.fillText("RUN!", espaceLetter * 32, espaceLetter * 7);
            }
        }
        if (this.state.bo == 3) {
            if (desk.camera) {
                ctx.fillStyle = this.color.bo;
                ctx.fillRect(
                    espaceLetter * 5,
                    espaceLetter * 10,
                    espaceLetter * 55,
                    espaceLetter * 51
                );
                ctx.fillStyle = "#fff";
                ctx.fillRect(
                    espaceLetter * 15,
                    espaceLetter * 25,
                    espaceLetter * 10,
                    espaceLetter * 10
                );
                ctx.fillRect(
                    espaceLetter * 40,
                    espaceLetter * 25,
                    espaceLetter * 10,
                    espaceLetter * 10
                );
            } else if (desk.lights.e) {
                ctx.fillStyle = this.color.bo;
                ctx.fillRect(
                    espaceLetter * 26,
                    espaceLetter * 18,
                    espaceLetter * 6,
                    espaceLetter * 6
                );
            }
        }
        if (this.state.ch == 2) {
            if (desk.camera) {
                ctx.fillStyle = this.color.ch;
                ctx.fillRect(
                    espaceLetter * 90,
                    espaceLetter * 8,
                    espaceLetter * 8,
                    espaceLetter * 15
                );
                ctx.fillRect(
                    espaceLetter * 92.5,
                    espaceLetter * 5,
                    espaceLetter * 3,
                    espaceLetter * 3
                );
                ctx.fillRect(
                    espaceLetter * 88,
                    espaceLetter * 8,
                    espaceLetter * 2,
                    espaceLetter * 8
                );
                ctx.fillRect(
                    espaceLetter * 98,
                    espaceLetter * 8,
                    espaceLetter * 2,
                    espaceLetter * 8
                );
            }
        }
        if (this.state.fr == 2) {
            if (desk.camera) {
                ctx.fillStyle = "#181818";
                ctx.fillRect(
                    espaceLetter * 90,
                    espaceLetter * 8,
                    espaceLetter * 8,
                    espaceLetter * 15
                );
                ctx.fillRect(
                    espaceLetter * 92.5,
                    espaceLetter * 5,
                    espaceLetter * 3,
                    espaceLetter * 3
                );
                ctx.fillRect(
                    espaceLetter * 88,
                    espaceLetter * 8,
                    espaceLetter * 2,
                    espaceLetter * 8
                );
                ctx.fillRect(
                    espaceLetter * 98,
                    espaceLetter * 8,
                    espaceLetter * 2,
                    espaceLetter * 8
                );
                ctx.fillStyle = "#fff";
                ctx.fillRect(
                    espaceLetter * 93.2,
                    espaceLetter * 5.8,
                    espaceLetter / 2,
                    espaceLetter / 2
                );
                ctx.fillRect(
                    espaceLetter * 94.2,
                    espaceLetter * 5.8,
                    espaceLetter / 2,
                    espaceLetter / 2
                );
            }
        }
        if (this.state.ch == 3) {
            if (desk.camera) {
                ctx.fillStyle = this.color.ch;
                ctx.fillRect(
                    espaceLetter * 67,
                    espaceLetter * 10,
                    espaceLetter * 55,
                    espaceLetter * 51
                );
                ctx.fillStyle = "#fff";
                ctx.fillRect(
                    espaceLetter * 78,
                    espaceLetter * 25,
                    espaceLetter * 10,
                    espaceLetter * 10
                );
                ctx.fillRect(
                    espaceLetter * 103,
                    espaceLetter * 25,
                    espaceLetter * 10,
                    espaceLetter * 10
                );
            } else if (desk.lights.d) {
                ctx.fillStyle = this.color.ch;
                ctx.fillRect(
                    espaceLetter * 93,
                    espaceLetter * 18,
                    espaceLetter * 6,
                    espaceLetter * 6
                );
            }
        }
        if (this.state.fr == 3) {
            if (desk.camera) {
                ctx.fillStyle = "#181818";
                ctx.fillRect(
                    espaceLetter * 67,
                    espaceLetter * 10,
                    espaceLetter * 55,
                    espaceLetter * 51
                );
                ctx.fillStyle = "#fff";
                ctx.fillRect(
                    espaceLetter * 78,
                    espaceLetter * 25,
                    espaceLetter * 10,
                    espaceLetter * 10
                );
                ctx.fillRect(
                    espaceLetter * 103,
                    espaceLetter * 25,
                    espaceLetter * 10,
                    espaceLetter * 10
                );
            }
        }
    }

    drawJumpscare() {
        switch (desk.animaJumpscare) {
            case 1:
                ctx.fillStyle = this.color.bo;
                ctx.fillRect(
                    espaceLetter * 35,
                    espaceLetter * 10,
                    espaceLetter * 55,
                    espaceLetter * 51
                );
                ctx.fillStyle = "#fff";
                ctx.fillRect(
                    espaceLetter * 45,
                    espaceLetter * 25,
                    espaceLetter * 10,
                    espaceLetter * 10
                );
                ctx.fillRect(
                    espaceLetter * 70,
                    espaceLetter * 25,
                    espaceLetter * 10,
                    espaceLetter * 10
                );
                break;
            case 2:
                ctx.fillStyle = this.color.ch;
                ctx.fillRect(
                    espaceLetter * 35,
                    espaceLetter * 10,
                    espaceLetter * 55,
                    espaceLetter * 51
                );
                ctx.fillStyle = "#fff";
                ctx.fillRect(
                    espaceLetter * 45,
                    espaceLetter * 25,
                    espaceLetter * 10,
                    espaceLetter * 10
                );
                ctx.fillRect(
                    espaceLetter * 70,
                    espaceLetter * 25,
                    espaceLetter * 10,
                    espaceLetter * 10
                );
                break;
            case 3:
                ctx.fillStyle = this.color.fo;
                ctx.fillRect(
                    espaceLetter * 15,
                    espaceLetter * 23,
                    espaceLetter * 7,
                    espaceLetter * 24
                );
                ctx.fillRect(
                    espaceLetter * 18,
                    espaceLetter * 17,
                    espaceLetter * 4,
                    espaceLetter * 6
                );
                ctx.fillRect(
                    espaceLetter * 15,
                    espaceLetter * 45,
                    espaceLetter * 5,
                    espaceLetter * 16
                );
                ctx.fillRect(
                    espaceLetter * 13,
                    espaceLetter * 23,
                    espaceLetter * 2,
                    espaceLetter * 18
                );
                break;
            case 4:
                ctx.fillStyle = this.color.fr;
                ctx.fillRect(
                    espaceLetter * 35,
                    espaceLetter * 10,
                    espaceLetter * 55,
                    espaceLetter * 51
                );
                ctx.fillStyle = "#fff";
                ctx.fillRect(
                    espaceLetter * 45,
                    espaceLetter * 25,
                    espaceLetter * 10,
                    espaceLetter * 10
                );
                ctx.fillRect(
                    espaceLetter * 70,
                    espaceLetter * 25,
                    espaceLetter * 10,
                    espaceLetter * 10
                );
                break;
        }
    }

    update() {
        console.log(" ");
        this.updateBonnie();
        if (desk.state == 0) this.updateChica();
        if (desk.state == 0) this.updateFoxy();
        if (desk.state == 0) this.updateFreddy();
        console.log(" ");
    }

    updateBonnie() {
        if (
            this.activeAnima.bo.night &&
            desk.time >= this.activeAnima.bo.hora
        ) {
            switch (this.state.bo) {
                case 0:
                    if (Math.random() * 100 + 1 < this.difficulty.bo.alpha) {
                        this.state.bo = 1;
                        console.log("Bo Ativado!");
                    } else {
                        console.log("Bo desativado");
                    }
                    break;
                case 1:
                    if (
                        Math.random() * 100 + 1 < this.difficulty.bo.alpha &&
                        this.state.fo != 2
                    ) {
                        this.state.bo = 2;
                        console.log("Bo no Corredor!");
                    } else {
                        console.log("Bo ativado");
                    }
                    break;
                case 2:
                    if (!desk.doors.e) {
                        if (
                            Math.random() * 100 + 1 <
                            this.difficulty.bo.alpha
                        ) {
                            this.state.bo = 3;
                            controleSoundAnimaPorta.bo = true;
                            console.log("Bo na Porta!");
                        } else {
                            console.log("Bo no corredor");
                        }
                    }
                    break;
                case 3:
                    if (!desk.doors.e && desk.camera) {
                        if (
                            Math.random() * 100 + 1 <
                            this.difficulty.bo.mortalidade
                        ) {
                            desk.state = 2;
                            desk.animaJumpscare = 1;
                            console.log("Bo te Matou!");
                        } else {
                            if (
                                Math.random() * 100 + 1 <
                                this.difficulty.bo.alpha / 2
                            ) {
                                desk.errorComand.e = true;
                                setTimeout(
                                    () => (desk.errorComand.e = false),
                                    5000
                                );
                            }
                            console.log("Bo está para te matar");
                        }
                    } else if (desk.doors.e) {
                        if (Math.random() * 100 + 1 < this.difficulty.bo.fuga) {
                            this.state.bo = 1;
                            console.log("Bo Correu!");
                        } else {
                            console.log("Bo ainda está na porta");
                        }
                    }
                    break;
            }
        }
    }

    updateChica() {
        if (
            this.activeAnima.ch.night &&
            desk.time >= this.activeAnima.ch.hora
        ) {
            switch (this.state.ch) {
                case 0:
                    if (Math.random() * 100 + 1 < this.difficulty.ch.alpha) {
                        this.state.ch = 1;
                        console.log("Ch Ativado!");
                    } else {
                        console.log("Ch desativado");
                    }
                    break;
                case 1:
                    if (Math.random() * 100 + 1 < this.difficulty.ch.alpha) {
                        this.state.ch = 2;
                        console.log("Ch no Corredor!");
                    } else {
                        console.log("Ch ativado");
                    }
                    break;
                case 2:
                    if (!desk.doors.d) {
                        if (
                            Math.random() * 100 + 1 <
                            this.difficulty.ch.alpha
                        ) {
                            this.state.ch = 3;
                            controleSoundAnimaPorta.ch = true;
                            console.log("Ch na Porta!");
                        } else {
                            console.log("Ch no corredor");
                        }
                    }
                    break;
                case 3:
                    if (!desk.doors.d && desk.camera) {
                        if (
                            Math.random() * 100 + 1 <
                            this.difficulty.ch.mortalidade
                        ) {
                            desk.state = 2;
                            desk.animaJumpscare = 2;
                            console.log("Ch te Matou!");
                        } else {
                            if (
                                Math.random() * 100 + 1 <
                                this.difficulty.ch.alpha / 2
                            ) {
                                desk.errorComand.d = true;
                                setTimeout(
                                    () => (desk.errorComand.d = false),
                                    5000
                                );
                            }
                            console.log("Ch está para te matar");
                        }
                    } else if (desk.doors.d) {
                        if (Math.random() * 100 + 1 < this.difficulty.ch.fuga) {
                            this.state.ch = 1;
                            console.log("Ch Correu!");
                        } else {
                            console.log("Ch ainda está na porta");
                        }
                    }
                    break;
            }
        }
    }

    updateFoxy() {
        if (
            this.activeAnima.fo.night &&
            desk.time >= this.activeAnima.fo.hora
        ) {
            switch (this.state.fo) {
                case 0:
                    if (Math.random() * 100 + 1 < this.difficulty.fo.alpha) {
                        this.state.fo = 1;
                        console.log("Fo Ativado!");
                    } else {
                        console.log("Fo desativado");
                    }
                    break;
                case 1:
                    if (Math.random() * 100 + 1 < this.difficulty.fo.alpha) {
                        this.state.fo = 2;
                        console.log("Fo no Corredor!");
                    } else {
                        console.log("Fo ativado");
                    }
                    break;
                case 2:
                    if (!this.difficulty.fo.runmode &&
                        controlFoxy.corredor.timeAtack
                    ) {
                        controlFoxy.corredor.timeoutAtack.a = setTimeout(() => {
                            console.log("Fo pode te atacar a qualquer momento");
                            controlFoxy.corredor.timeoutAtack.b = setInterval(
                                () => {
                                    if (controlFoxy.runmode.atack) {
                                        if (!desk.doors.e) {
                                            if (
                                                Math.random() * 100 + 1 <
                                                this.difficulty.fo.mortalidade
                                            ) {
                                                desk.state = 2;
                                                desk.animaJumpscare = 3;
                                                console.log("Fo te Matou!");
                                            } else {
                                                console.log(
                                                    "Fo esta para te matar"
                                                );
                                            }
                                        }
                                    } else {
                                        clearInterval(
                                            controlFoxy.corredor.timeoutAtack.b
                                        );
                                    }
                                },
                                3000
                            );
                        }, 9000);
                        controlFoxy.corredor.timeAtack = false;
                    }
                    break;
            }
        }
    }

    foxyRun() {
        clearTimeout(controlFoxy.corredor.timeoutAtack.a);
        clearTimeout(controlFoxy.corredor.timeoutAtack.b);
        setTimeout(() => {
            if (desk.camera) {
                desk.camera = false;
                playSound(1, 1);
            }
        }, 2000);
        setTimeout(() => {
            if (!desk.doors.e) {
                desk.state = 2;
                desk.animaJumpscare = 3;
                console.log("Fo te Matou!");
            } else {
                playSound(1, 12);
                animatronics.state.fo = 1;
                this.difficulty.fo.runmode = false;
                controlFoxy.corredor.timeAtack = true;
                controlFoxy.runmode.sound = true;
                controlFoxy.runmode.atack = true;
                console.log("Fo Correu!");
            }
        }, 3000);
    }

    updateFreddy() {
        if (
            this.activeAnima.fr.night &&
            desk.time >= this.activeAnima.fr.hora
        ) {
            switch (this.state.fr) {
                case 0:
                    if (Math.random() * 100 + 1 < this.difficulty.fr.alpha) {
                        this.state.fr = 1;
                        playSound(1, 14);
                        console.log("Fr Ativado!");
                    } else {
                        console.log("Fr desativado");
                    }
                    break;
                case 1:
                    if (Math.random() * 100 + 1 < this.difficulty.fr.alpha) {
                        this.state.fr = 2;
                        playSound(1, 14);
                        console.log("Fr no Corredor!");
                    } else {
                        console.log("Fr ativado");
                    }
                    break;
                case 2:
                    if (Math.random() * 100 + 1 < this.difficulty.fr.alpha) {
                        this.state.fr = 3;
                        playSound(1, 14);
                        console.log("Fr na Porta!");
                    } else {
                        console.log("Fr no corredor");
                    }
                    break;
                case 3:
                    if (!desk.camera) {
                        if (this.difficulty.fr.b == 3) {
                            if (
                                Math.random() * 100 + 1 <
                                this.difficulty.fr.mortalidade
                            ) {
                                desk.state = 2;
                                desk.animaJumpscare = 4;
                                console.log("Fr te Matou!");
                            } else {
                                console.log("Fr esta para te matar");
                            }
                        }
                    } else {
                        this.difficulty.fr.b = 0;
                    }
                    break;
            }
        }
    }
}

class Chiasso {
    constructor(pos, dim, color, speed) {
        this.pos = pos;
        this.dim = dim;
        this.color = color;
        this.speed = speed;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos.x, this.pos.y, this.dim.w, this.dim.h);
    }

    update() {
        this.draw();
        this.pos.x += this.speed.x;
        if (Math.random() * 100 < 20) {
            this.speed.x *= -1;
        }
    }
}
