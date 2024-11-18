// These are the different drawings for the LED Matrix
// created using this tool:
// https://ledmatrix-editor.arduino.cc/

const uint32_t up[] = {
	0x600f,
	0x1680600,
	0x60060000
};

const uint32_t down[] = {
	0x6006,
	0x601680,
	0xf0060000
};

const uint32_t left[] = {
	0x4008,
	0x1f81f80,
	0x80040000
};

const uint32_t right[] = {
	0x2001,
	0x1f81f80,
	0x10020000
};

const uint32_t heart[] = {
	0x3184a444,
	0x44042081,
	0x100a0040
};