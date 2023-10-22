import React from 'react';

import { NativeModules } from 'react-native';

const ImageCropBrowserPicker = NativeModules.ImageBrowserCropPicker;

export default ImageBrowserCropPicker;
export const openPicker = ImageBrowserCropPicker.openPicker;
export const openCamera = ImageBrowserCropPicker.openCamera;
export const openCropper = ImageBrowserCropPicker.openCropper;
export const clean = ImageBrowserCropPicker.clean;
export const cleanSingle = ImageBrowserCropPicker.cleanSingle;
