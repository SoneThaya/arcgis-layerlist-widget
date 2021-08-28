import React, { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";

const Map = () => {
  const MapEl = useRef(null);

  useEffect(() => {
    loadModules([
      "esri/views/SceneView",
      "esri/widgets/LayerList",
      "esri/WebScene",
    ]).then(([SceneView, LayerList, WebScene]) => {
      var scene = new WebScene({
        portalItem: {
          // autocasts as new PortalItem()
          id: "adfad6ee6c6043238ea64e121bb6429a",
        },
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
      });

      view.when(function () {
        var layerList = new LayerList({
          view: view,
        });

        // Add widget to the top right corner of the view
        view.ui.add(layerList, "top-right");
      });
    });
  }, []);

  return (
    <div
      id="viewDiv"
      style={{ height: "100vh", width: "100vw" }}
      ref={MapEl}
    ></div>
  );
};

export default Map;
