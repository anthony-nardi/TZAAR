class WindowHelper {
    constructor() {
        this.width = 0;
        this.height = 0;
        this.devicePixelRatio = 1;
    }
    setWidth() {
        this.width = window.innerWidth;
    }
    setHeight() {
        this.height = window.innerHeight;
    }
    setUseWindowHeight() {
        if (!window || !window.innerWidth) {
            throw Error("Window not available");
        }
        this.useWindowHeight = window.innerWidth > window.innerHeight;
    }
    setDevicePixelRatio() {
        if (!window || !window.devicePixelRatio) {
            throw Error("Window not available");
        }
        this.devicePixelRatio = window.devicePixelRatio;
    }
}
export default new WindowHelper();
//# sourceMappingURL=WindowHelper.js.map