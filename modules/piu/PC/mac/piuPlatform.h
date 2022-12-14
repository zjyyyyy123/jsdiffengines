/*
 * Copyright (c) 2016-2019  Moddable Tech, Inc.
 *
 *   This file is part of the Moddable SDK Runtime.
 * 
 *   The Moddable SDK Runtime is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Lesser General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 * 
 *   The Moddable SDK Runtime is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Lesser General Public License for more details.
 * 
 *   You should have received a copy of the GNU Lesser General Public License
 *   along with the Moddable SDK Runtime.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

#ifndef MAC_OS_X_VERSION_10_12
#define NSAlertStyleInformational NSInformationalAlertStyle
#define NSAlertStyleCritical NSCriticalAlertStyle
#define NSAlertStyleWarning NSWarningAlertStyle
#define NSCompositingOperationSourceOver NSCompositeSourceOver
#define NSEventModifierFlagCommand NSCommandKeyMask
#define NSEventModifierFlagOption NSAlternateKeyMask
#define NSEventModifierFlagShift NSShiftKeyMask
#define NSPasteboardTypeString NSStringPboardType
#define NSWindowStyleMaskTitled NSTitledWindowMask
#define NSWindowStyleMaskClosable NSClosableWindowMask
#define NSWindowStyleMaskMiniaturizable NSMiniaturizableWindowMask
#define NSWindowStyleMaskResizable NSResizableWindowMask
#endif

#ifndef MAC_OS_X_VERSION_10_13
#define NSControlStateValueOn NSOnState
#define NSControlStateValueOff NSOffState
#endif

#ifndef MAC_OS_X_VERSION_10_14
#endif

#define piuPC 1
typedef int32_t PiuCoordinate;
typedef int32_t PiuDimension;
#define xsPiuCoordinate(VALUE) xsInteger((xsIntegerValue)(VALUE))
#define xsPiuDimension(VALUE) xsInteger((xsIntegerValue)(VALUE))
#define xsToPiuCoordinate(SLOT) (PiuCoordinate)xsToInteger(SLOT)
#define xsToPiuDimension(SLOT) (PiuDimension)xsToInteger(SLOT)
