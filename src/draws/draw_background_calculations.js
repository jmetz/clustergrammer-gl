var vectorize_label = require('./../matrix_labels/vectorize_label');
var drop_label_from_queue = require('./../matrix_labels/drop_label_from_queue');

module.exports = function draw_background_calculations(regl, params){

  /*
    Set up something to run background calculations if
    necessary when the visualization is not being updated. For instance,
    we could calculate the text triangles of all rows a little at a time
    in the background.
  */

  // var updated_labels = false;
  _.each(['row', 'col'], function(inst_axis){

    // low priority queue
    if (params.labels.queue.low[inst_axis].length > 0){

      var inst_name = params.labels.queue.low[inst_axis][0];

      // add to text_triangles pre-calc
      var inst_text_vect = vectorize_label(params, inst_axis, inst_name);
      params.text_triangles[inst_axis][inst_name] = inst_text_vect;

      drop_label_from_queue(params.labels.queue.low[inst_axis], inst_axis, inst_name);

      // console.log(params.labels.queue.low[inst_axis].length)
      // params.labels.draw_labels = true;

    }

  });

};