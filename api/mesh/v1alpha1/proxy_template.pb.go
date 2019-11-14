// Code generated by protoc-gen-go. DO NOT EDIT.
// source: mesh/v1alpha1/proxy_template.proto

package v1alpha1

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

// ProxyTemplate defines the desired state of ProxyTemplate
type ProxyTemplate struct {
	// List of Dataplane selectors.
	// +optional
	Selectors []*Selector `protobuf:"bytes,1,rep,name=selectors,proto3" json:"selectors,omitempty"`
	// List of imported profiles.
	// +optional
	Imports []string `protobuf:"bytes,2,rep,name=imports,proto3" json:"imports,omitempty"`
	// List of raw xDS resources.
	// +optional
	Resources            []*ProxyTemplateRawResource `protobuf:"bytes,3,rep,name=resources,proto3" json:"resources,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                    `json:"-"`
	XXX_unrecognized     []byte                      `json:"-"`
	XXX_sizecache        int32                       `json:"-"`
}

func (m *ProxyTemplate) Reset()         { *m = ProxyTemplate{} }
func (m *ProxyTemplate) String() string { return proto.CompactTextString(m) }
func (*ProxyTemplate) ProtoMessage()    {}
func (*ProxyTemplate) Descriptor() ([]byte, []int) {
	return fileDescriptor_129e53d675ac14f4, []int{0}
}

func (m *ProxyTemplate) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ProxyTemplate.Unmarshal(m, b)
}
func (m *ProxyTemplate) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ProxyTemplate.Marshal(b, m, deterministic)
}
func (m *ProxyTemplate) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ProxyTemplate.Merge(m, src)
}
func (m *ProxyTemplate) XXX_Size() int {
	return xxx_messageInfo_ProxyTemplate.Size(m)
}
func (m *ProxyTemplate) XXX_DiscardUnknown() {
	xxx_messageInfo_ProxyTemplate.DiscardUnknown(m)
}

var xxx_messageInfo_ProxyTemplate proto.InternalMessageInfo

func (m *ProxyTemplate) GetSelectors() []*Selector {
	if m != nil {
		return m.Selectors
	}
	return nil
}

func (m *ProxyTemplate) GetImports() []string {
	if m != nil {
		return m.Imports
	}
	return nil
}

func (m *ProxyTemplate) GetResources() []*ProxyTemplateRawResource {
	if m != nil {
		return m.Resources
	}
	return nil
}

type ProxyTemplateSource struct {
	// Name of a configuration source.
	// +optional
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Types that are valid to be assigned to Type:
	//	*ProxyTemplateSource_Profile
	//	*ProxyTemplateSource_Raw
	Type                 isProxyTemplateSource_Type `protobuf_oneof:"type"`
	XXX_NoUnkeyedLiteral struct{}                   `json:"-"`
	XXX_unrecognized     []byte                     `json:"-"`
	XXX_sizecache        int32                      `json:"-"`
}

func (m *ProxyTemplateSource) Reset()         { *m = ProxyTemplateSource{} }
func (m *ProxyTemplateSource) String() string { return proto.CompactTextString(m) }
func (*ProxyTemplateSource) ProtoMessage()    {}
func (*ProxyTemplateSource) Descriptor() ([]byte, []int) {
	return fileDescriptor_129e53d675ac14f4, []int{1}
}

func (m *ProxyTemplateSource) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ProxyTemplateSource.Unmarshal(m, b)
}
func (m *ProxyTemplateSource) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ProxyTemplateSource.Marshal(b, m, deterministic)
}
func (m *ProxyTemplateSource) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ProxyTemplateSource.Merge(m, src)
}
func (m *ProxyTemplateSource) XXX_Size() int {
	return xxx_messageInfo_ProxyTemplateSource.Size(m)
}
func (m *ProxyTemplateSource) XXX_DiscardUnknown() {
	xxx_messageInfo_ProxyTemplateSource.DiscardUnknown(m)
}

var xxx_messageInfo_ProxyTemplateSource proto.InternalMessageInfo

func (m *ProxyTemplateSource) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type isProxyTemplateSource_Type interface {
	isProxyTemplateSource_Type()
}

type ProxyTemplateSource_Profile struct {
	Profile *ProxyTemplateProfileSource `protobuf:"bytes,2,opt,name=profile,proto3,oneof"`
}

type ProxyTemplateSource_Raw struct {
	Raw *ProxyTemplateRawSource `protobuf:"bytes,3,opt,name=raw,proto3,oneof"`
}

func (*ProxyTemplateSource_Profile) isProxyTemplateSource_Type() {}

func (*ProxyTemplateSource_Raw) isProxyTemplateSource_Type() {}

func (m *ProxyTemplateSource) GetType() isProxyTemplateSource_Type {
	if m != nil {
		return m.Type
	}
	return nil
}

func (m *ProxyTemplateSource) GetProfile() *ProxyTemplateProfileSource {
	if x, ok := m.GetType().(*ProxyTemplateSource_Profile); ok {
		return x.Profile
	}
	return nil
}

func (m *ProxyTemplateSource) GetRaw() *ProxyTemplateRawSource {
	if x, ok := m.GetType().(*ProxyTemplateSource_Raw); ok {
		return x.Raw
	}
	return nil
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*ProxyTemplateSource) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*ProxyTemplateSource_Profile)(nil),
		(*ProxyTemplateSource_Raw)(nil),
	}
}

type ProxyTemplateProfileSource struct {
	// Profile name.
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Profile params if any.
	// +optional
	Params               map[string]string `protobuf:"bytes,2,rep,name=params,proto3" json:"params,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *ProxyTemplateProfileSource) Reset()         { *m = ProxyTemplateProfileSource{} }
func (m *ProxyTemplateProfileSource) String() string { return proto.CompactTextString(m) }
func (*ProxyTemplateProfileSource) ProtoMessage()    {}
func (*ProxyTemplateProfileSource) Descriptor() ([]byte, []int) {
	return fileDescriptor_129e53d675ac14f4, []int{2}
}

func (m *ProxyTemplateProfileSource) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ProxyTemplateProfileSource.Unmarshal(m, b)
}
func (m *ProxyTemplateProfileSource) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ProxyTemplateProfileSource.Marshal(b, m, deterministic)
}
func (m *ProxyTemplateProfileSource) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ProxyTemplateProfileSource.Merge(m, src)
}
func (m *ProxyTemplateProfileSource) XXX_Size() int {
	return xxx_messageInfo_ProxyTemplateProfileSource.Size(m)
}
func (m *ProxyTemplateProfileSource) XXX_DiscardUnknown() {
	xxx_messageInfo_ProxyTemplateProfileSource.DiscardUnknown(m)
}

var xxx_messageInfo_ProxyTemplateProfileSource proto.InternalMessageInfo

func (m *ProxyTemplateProfileSource) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *ProxyTemplateProfileSource) GetParams() map[string]string {
	if m != nil {
		return m.Params
	}
	return nil
}

type ProxyTemplateRawSource struct {
	// List of raw xDS resources.
	// +optional
	Resources            []*ProxyTemplateRawResource `protobuf:"bytes,1,rep,name=resources,proto3" json:"resources,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                    `json:"-"`
	XXX_unrecognized     []byte                      `json:"-"`
	XXX_sizecache        int32                       `json:"-"`
}

func (m *ProxyTemplateRawSource) Reset()         { *m = ProxyTemplateRawSource{} }
func (m *ProxyTemplateRawSource) String() string { return proto.CompactTextString(m) }
func (*ProxyTemplateRawSource) ProtoMessage()    {}
func (*ProxyTemplateRawSource) Descriptor() ([]byte, []int) {
	return fileDescriptor_129e53d675ac14f4, []int{3}
}

func (m *ProxyTemplateRawSource) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ProxyTemplateRawSource.Unmarshal(m, b)
}
func (m *ProxyTemplateRawSource) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ProxyTemplateRawSource.Marshal(b, m, deterministic)
}
func (m *ProxyTemplateRawSource) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ProxyTemplateRawSource.Merge(m, src)
}
func (m *ProxyTemplateRawSource) XXX_Size() int {
	return xxx_messageInfo_ProxyTemplateRawSource.Size(m)
}
func (m *ProxyTemplateRawSource) XXX_DiscardUnknown() {
	xxx_messageInfo_ProxyTemplateRawSource.DiscardUnknown(m)
}

var xxx_messageInfo_ProxyTemplateRawSource proto.InternalMessageInfo

func (m *ProxyTemplateRawSource) GetResources() []*ProxyTemplateRawResource {
	if m != nil {
		return m.Resources
	}
	return nil
}

type ProxyTemplateRawResource struct {
	// The resource's name, to distinguish it from others of the same type of
	// resource.
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// The resource level version. It allows xDS to track the state of individual
	// resources.
	Version string `protobuf:"bytes,2,opt,name=version,proto3" json:"version,omitempty"`
	// xDS resource.
	Resource             string   `protobuf:"bytes,3,opt,name=resource,proto3" json:"resource,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ProxyTemplateRawResource) Reset()         { *m = ProxyTemplateRawResource{} }
func (m *ProxyTemplateRawResource) String() string { return proto.CompactTextString(m) }
func (*ProxyTemplateRawResource) ProtoMessage()    {}
func (*ProxyTemplateRawResource) Descriptor() ([]byte, []int) {
	return fileDescriptor_129e53d675ac14f4, []int{4}
}

func (m *ProxyTemplateRawResource) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ProxyTemplateRawResource.Unmarshal(m, b)
}
func (m *ProxyTemplateRawResource) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ProxyTemplateRawResource.Marshal(b, m, deterministic)
}
func (m *ProxyTemplateRawResource) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ProxyTemplateRawResource.Merge(m, src)
}
func (m *ProxyTemplateRawResource) XXX_Size() int {
	return xxx_messageInfo_ProxyTemplateRawResource.Size(m)
}
func (m *ProxyTemplateRawResource) XXX_DiscardUnknown() {
	xxx_messageInfo_ProxyTemplateRawResource.DiscardUnknown(m)
}

var xxx_messageInfo_ProxyTemplateRawResource proto.InternalMessageInfo

func (m *ProxyTemplateRawResource) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *ProxyTemplateRawResource) GetVersion() string {
	if m != nil {
		return m.Version
	}
	return ""
}

func (m *ProxyTemplateRawResource) GetResource() string {
	if m != nil {
		return m.Resource
	}
	return ""
}

func init() {
	proto.RegisterType((*ProxyTemplate)(nil), "kuma.mesh.v1alpha1.ProxyTemplate")
	proto.RegisterType((*ProxyTemplateSource)(nil), "kuma.mesh.v1alpha1.ProxyTemplateSource")
	proto.RegisterType((*ProxyTemplateProfileSource)(nil), "kuma.mesh.v1alpha1.ProxyTemplateProfileSource")
	proto.RegisterMapType((map[string]string)(nil), "kuma.mesh.v1alpha1.ProxyTemplateProfileSource.ParamsEntry")
	proto.RegisterType((*ProxyTemplateRawSource)(nil), "kuma.mesh.v1alpha1.ProxyTemplateRawSource")
	proto.RegisterType((*ProxyTemplateRawResource)(nil), "kuma.mesh.v1alpha1.ProxyTemplateRawResource")
}

func init() { proto.RegisterFile("mesh/v1alpha1/proxy_template.proto", fileDescriptor_129e53d675ac14f4) }

var fileDescriptor_129e53d675ac14f4 = []byte{
	// 375 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x93, 0xcf, 0x6a, 0xea, 0x40,
	0x14, 0xc6, 0xef, 0x18, 0xaf, 0x9a, 0x13, 0x2e, 0x5c, 0xe6, 0x5e, 0xca, 0x10, 0x5c, 0x84, 0xac,
	0x42, 0x29, 0x11, 0xed, 0xa6, 0x75, 0xd1, 0x85, 0x50, 0x28, 0xae, 0x64, 0xec, 0xaa, 0x9b, 0x32,
	0xd5, 0x29, 0x8a, 0x89, 0x33, 0x4c, 0xa2, 0x36, 0x8f, 0xd5, 0x07, 0x28, 0x7d, 0xb5, 0x92, 0x49,
	0x46, 0x1b, 0x1a, 0x69, 0x4b, 0x77, 0xe7, 0x24, 0xdf, 0xf7, 0x3b, 0xff, 0x18, 0xf0, 0x63, 0x9e,
	0x2c, 0x7a, 0xdb, 0x3e, 0x8b, 0xe4, 0x82, 0xf5, 0x7b, 0x52, 0x89, 0xa7, 0xec, 0x3e, 0xe5, 0xb1,
	0x8c, 0x58, 0xca, 0x43, 0xa9, 0x44, 0x2a, 0x30, 0x5e, 0x6d, 0x62, 0x16, 0xe6, 0xc2, 0xd0, 0x08,
	0xdd, 0x6e, 0xd5, 0x97, 0xf0, 0x88, 0xcf, 0x52, 0xa1, 0x0a, 0x87, 0xff, 0x8c, 0xe0, 0xcf, 0x24,
	0x47, 0xdd, 0x96, 0x24, 0x3c, 0x04, 0xdb, 0x68, 0x12, 0x82, 0x3c, 0x2b, 0x70, 0x06, 0xdd, 0xf0,
	0x23, 0x37, 0x9c, 0x96, 0x22, 0x7a, 0x90, 0x63, 0x02, 0xed, 0x65, 0x2c, 0x85, 0x4a, 0x13, 0xd2,
	0xf0, 0xac, 0xc0, 0xa6, 0x26, 0xc5, 0x63, 0xb0, 0x15, 0x4f, 0xc4, 0x46, 0xcd, 0x78, 0x42, 0x2c,
	0x4d, 0x3d, 0xab, 0xa3, 0x56, 0x7a, 0xa1, 0x6c, 0x47, 0x4b, 0x13, 0x3d, 0xd8, 0xfd, 0x17, 0x04,
	0xff, 0x2a, 0xba, 0xa9, 0xfe, 0x81, 0x31, 0x34, 0xd7, 0x2c, 0xe6, 0x04, 0x79, 0x28, 0xb0, 0xa9,
	0x8e, 0xf1, 0x18, 0xda, 0x52, 0x89, 0xc7, 0x65, 0xc4, 0x49, 0xc3, 0x43, 0x81, 0x33, 0x08, 0x3f,
	0xad, 0x3a, 0x29, 0xf4, 0x05, 0xf4, 0xe6, 0x17, 0x35, 0x00, 0x7c, 0x05, 0x96, 0x62, 0x3b, 0x62,
	0x69, 0xce, 0xe9, 0x57, 0xba, 0xdf, 0x33, 0x72, 0xe3, 0xa8, 0x05, 0xcd, 0x34, 0x93, 0xdc, 0x7f,
	0x45, 0xe0, 0x1e, 0xaf, 0x58, 0x3b, 0x06, 0x85, 0x96, 0x64, 0x8a, 0xc5, 0xc5, 0x5e, 0x9d, 0xc1,
	0xf0, 0x7b, 0x53, 0x84, 0x13, 0x6d, 0xbe, 0x5e, 0xa7, 0x2a, 0xa3, 0x25, 0xc9, 0xbd, 0x04, 0xe7,
	0xdd, 0x67, 0xfc, 0x17, 0xac, 0x15, 0xcf, 0xca, 0xaa, 0x79, 0x88, 0xff, 0xc3, 0xef, 0x2d, 0x8b,
	0x36, 0xc5, 0xe6, 0x6c, 0x5a, 0x24, 0xc3, 0xc6, 0x05, 0xf2, 0xe7, 0x70, 0x52, 0x3f, 0x6a, 0xf5,
	0xce, 0xe8, 0x67, 0x77, 0x9e, 0x03, 0x39, 0x26, 0xab, 0x5d, 0x12, 0x81, 0xf6, 0x96, 0xab, 0x64,
	0x29, 0xd6, 0x65, 0xc7, 0x26, 0xc5, 0x2e, 0x74, 0x0c, 0x56, 0x9f, 0xcf, 0xa6, 0xfb, 0x7c, 0x04,
	0x77, 0x1d, 0xd3, 0xd5, 0x43, 0x4b, 0x3f, 0x8a, 0xf3, 0xb7, 0x00, 0x00, 0x00, 0xff, 0xff, 0x6b,
	0xa2, 0x35, 0xdf, 0x6c, 0x03, 0x00, 0x00,
}
