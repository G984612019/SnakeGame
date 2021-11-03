function keyPush(env) {
  switch (env.keyCode) {
    case 37:
      if (key == 39) break;
      key = 37;
      xd = -1; yd = 0; break;
    case 38:
      if (key == 40) break;
      key = 38;
      xd = 0; yd = -1; break;
    case 39:
      if (key == 37) break;
      key = 39;
      xd = 1; yd = 0; break;
    case 40:
      if (key == 38) break;
      key = 40;
      xd = 0; yd = 1; break;
  }
}
