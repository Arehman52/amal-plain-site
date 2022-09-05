// If you like my work, please consider supporting it at https://www.patreon.com/iangilman

var duomo = {
    Image: {
      xmlns: "http://schemas.microsoft.com/deepzoom/2008",
      Url: "//openseadragon.github.io/example-images/duomo/duomo_files/",
      Format: "jpg",
      Overlap: "2",
      TileSize: "256",
      Size: {
        Width:  "13920",
        Height: "10200"
      }
    }
  };
  
  var viewer = OpenSeadragon({
    id: "seadragon-viewer",
    prefixUrl: "//openseadragon.github.io/openseadragon/images/",
    tileSources: duomo,
    gestureSettingsMouse: {
      clickToZoom: false
    }
  });
  
  var size = 0.2;

    // Initialize the Annotorious plugin
    debugger
    var anno = OpenSeadragon.Annotorious(viewer);
    debugger

    // Load annotations in W3C WebAnnotation format
    anno.loadAnnotations('annotations.w3c.json');
  
  
  // viewer.addHandler('canvas-click', function(event) {
    
  //    if (event.quick) {
  //      var point = event.position;
  //      var vp = viewer.viewport.viewerElementToViewportCoordinates(point);
  //      var box = new OpenSeadragon.Rect(vp.x - size / 2, vp.y - size / 2, size, size); 
  //      viewer.viewport.fitBounds(box);
  //    }
  // });
         