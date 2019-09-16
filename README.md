# HKERS


## responsive

1. add `isMobile` state value from `responsive` store
2. watch `isMobile` to trigger `go mobile` and `go desktop` event

## mouse parallax effect

1. add `ref="scene"` as wrapper
2. assign `ef-mouse-parallax` to each element you want to parallax
3. assign `ef-depth="40"` to set the depth value (-100 - 100, etc.) default: 50
4. import `mouseParallax` mixins;
