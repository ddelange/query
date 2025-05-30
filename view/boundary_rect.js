
module.exports = function( vs ){

  // validate required params
  if( !vs.isset('boundary:rect:top') ||
      !vs.isset('boundary:rect:right') ||
      !vs.isset('boundary:rect:bottom') ||
      !vs.isset('boundary:rect:left') ||
      !vs.isset('centroid:field') ){
    return null;
  }

  // base view with bbox
  var view = {
    geo_bounding_box: {
      [ vs.var('centroid:field') ]: {
        top: vs.var('boundary:rect:top'),
        right: vs.var('boundary:rect:right'),
        bottom: vs.var('boundary:rect:bottom'),
        left: vs.var('boundary:rect:left')
      }
    }
  };

  return view;
};
