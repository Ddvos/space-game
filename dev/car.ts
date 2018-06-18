class Car {

    private speed: number = 0
    private div: HTMLElement
    private x: number
    private y: number

    constructor() {
        this.div = document.createElement("meteor")
        let level = document.getElementsByTagName("level")[0]!
        level.appendChild(this.div)

        this.x = (Math.random() * window.innerWidth) - (Math.random())
        this.y = Math.ceil(Math.random() * 2) * 2
        this.speed = Math.random() * 2 + 2
       
    }

    // this will rturn the postion of the element 
    public getRectangle() {
        return this.div.getBoundingClientRect() 
    }


    public update(): void {
        this.y += this.speed
        
        if (this.y  > window.innerWidth) {
            this.y = -80
        }

        

        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)"
    }

}