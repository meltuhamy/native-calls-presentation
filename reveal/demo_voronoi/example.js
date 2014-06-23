// Copyright (c) 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Add event listeners after the NaCl module has loaded.  These listeners will
// forward messages to the NaCl module via postMessage()
function moduleDidLoad() {
  var disabled = document.location.search.search("emscripten") != -1;
  if(!disabled) common.naclModule.postMessage("threads: 32");
  common.naclModule.postMessage("points: 500");

}

// Handle a message coming from the NaCl module.
// In the Voronoi example, the only message will be the benchmark result.
function handleMessage(message_event) {
  var x = Math.round(message_event.data * 1000) / 1000;
  document.getElementById("result").textContent =
    "Result: " + x.toFixed(3) + " seconds";
}

